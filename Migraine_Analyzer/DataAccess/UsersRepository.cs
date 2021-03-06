using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Migraine_Analyzer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Migraine_Analyzer.DataAccess
{
    public class UsersRepository
    {
        readonly string _connectionString;
        public UsersRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("MigraineAnalyzer");
        }

        internal IEnumerable<Users> GetAll()
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Users";
            var users = db.Query<Users>(sql);
            return users;
        }

        internal Users GetSingleUser(int id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Users 
                        WHERE id = @id";
            var user = db.QuerySingleOrDefault<Users>(sql, new { id });
            return user;
        }

        internal Users GetUserByGoogleId(string id)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"SELECT * FROM Users
                        WHERE googleId = @id";
            var user = db.QuerySingleOrDefault<Users>(sql, new { id });
            return user;
        }

        internal Users UpdateUser(int id, Users userToUpdate)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"UPDATE Users
                        SET imageUrl = @imageUrl,
                        dateCreated = @dateCreated,
                        username = @username,
                        firstName = @firstName,
                        lastName = @lastName,
                        email = @email,
                        googleId = @googleId,
                        birthYear = @birthYear
                        OUTPUT INSERTED.*
                        WHERE id = @id";
            userToUpdate.Id = id;
            var updatedUser = db.QuerySingleOrDefault<Users>(sql, userToUpdate);
            return updatedUser;
        }

        internal int Add(Users user)
        {
            using var db = new SqlConnection(_connectionString);
            var sql = @"INSERT INTO Users
                       (imageUrl, dateCreated, username, firstName, lastName, 
                       email, googleId, birthYear)
                       OUTPUT INSERTED.id
                       VALUES(@imageUrl, GETUTCDATE(), @username, @firstName, 
                       @lastName, @email, @googleId, '')";
            var id = db.ExecuteScalar<int>(sql, user);
            user.Id = id;
            return id;
        }
    }
}
