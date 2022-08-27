using InternManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternManagementSystem.Data
{
    public class InternContext: DbContext
    {
        public InternContext(DbContextOptions<InternContext> options) : base(options)
        {

        }
        public DbSet<Intern> InternDetails { get; set; }
        public DbSet<Designation> DesignationDetails { get; set; }
        public DbSet<InternManagementSystem.Models.User> User { get; set; }
    }
}
