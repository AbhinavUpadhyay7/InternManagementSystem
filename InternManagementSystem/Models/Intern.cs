using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace InternManagementSystem.Models
{
    public class Intern
    {
        [Key]
        public int InternID { get; set; }
        [Required]
        public string InternName { get; set; }
        [Required]
        public string PhoneNumber { get; set; }
        [Required]
        public string EmailID { get; set; }
        [Required]
        public string Address { get; set; }
    }
}
