using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InternManagementSystem.Models
{
    public class Designation
    {
        [Key]
        public int DesignationID { get; set; }
        [Required]
        public string DesignationName { get; set; }
        [Required]
        public string RoleName { get; set; }
        [Required]
        public string DepartMent { get; set; }
    }
}
