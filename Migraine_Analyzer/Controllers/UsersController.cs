using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Migraine_Analyzer.DataAccess;
using Migraine_Analyzer.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Migraine_Analyzer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        UsersRepository _usersRepo;
        public UsersController(UsersRepository usersRepo)
        {
            _usersRepo = usersRepo;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_usersRepo.GetAll());
        }

        // Get user from id
        [HttpGet("singleUser/{userId}")]
        public IActionResult GetSingleUserFromId(int userId)
        {
            var user = _usersRepo.GetSingleUser(userId);
            return Ok(user);
        }

        // Get user from google id
        [HttpGet("googleId/{googleId}")]
        public IActionResult GetSingleUserByGoogleId(string googleId)
        {
            var user = _usersRepo.GetUserByGoogleId(googleId);
            if (user is null) return Ok(null);
            return Ok(user);
        }

        // Add a new user
        [HttpPost]
        public IActionResult AddSingleUser(Users user)
        {
            _usersRepo.Add(user);
            return Created($"/users/{user.Id}", user);
        }

        [HttpPut("updateUser/{userId}")]
        public IActionResult UpdateSingleUserFromId(int userId, Users user)
        {
            var updatedUser = _usersRepo.UpdateUser(userId, user);
            return Ok(updatedUser);
        }
    }
}
