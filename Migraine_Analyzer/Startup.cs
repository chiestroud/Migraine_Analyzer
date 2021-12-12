using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Migraine_Analyzer.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace Migraine_Analyzer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IConfiguration>(Configuration);

            services.AddTransient<UsersRepository>();
            services.AddTransient<DayRepository>();
            services.AddTransient<MonthRepository>();
            services.AddTransient<DurationRepository>();
            services.AddTransient<TempRepository>();
            services.AddTransient<TimeRepository>();
            services.AddTransient<UserMedicineRepository>();
            services.AddTransient<UserDrinkRepository>();
            services.AddTransient<UserFoodRepository>();
            services.AddTransient<MigrainesRepository>();

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                {
                    options.IncludeErrorDetails = true;
                    options.Authority = "https://securetoken.google.com/almost-b0c04";
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateLifetime = true,
                        ValidateAudience = true,
                        ValidateIssuer = true,
                        ValidAudience = "almost-b0c04",
                        ValidIssuer = "https://securetoken.google.com/almost-b0c04"
                    };
                });
            services.AddControllers();
            services.AddControllers().AddJsonOptions(options =>
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter()));
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Migraine_Analyzer", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseCors(cfg => cfg.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Migraine_Analyzer v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
