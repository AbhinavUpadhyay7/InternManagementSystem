using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InternManagementSystem.Data;
using InternManagementSystem.Models;
using Microsoft.AspNetCore.Cors;

namespace InternManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCorsImplementationPolicy")]
    public class DesignationsController : ControllerBase
    {
        private readonly InternContext _context;

        public DesignationsController(InternContext context)
        {
            _context = context;
        }

        // GET: api/Designations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Designation>>> GetDesignationDetails()
        {
            return await _context.DesignationDetails.ToListAsync();
        }

        // GET: api/Designations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Designation>> GetDesignation(int id)
        {
            var designation = await _context.DesignationDetails.FindAsync(id);

            if (designation == null)
            {
                return NotFound();
            }

            return designation;
        }

        // PUT: api/Designations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDesignation(int id, Designation designation)
        {
            if (id != designation.DesignationID)
            {
                return BadRequest();
            }

            _context.Entry(designation).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DesignationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Designations
        [HttpPost]
        public async Task<ActionResult<Designation>> PostDesignation(Designation designation)
        {
            _context.DesignationDetails.Add(designation);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDesignation", new { id = designation.DesignationID }, designation);
        }

        // DELETE: api/Designations/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Designation>> DeleteDesignation(int id)
        {
            var designation = await _context.DesignationDetails.FindAsync(id);
            if (designation == null)
            {
                return NotFound();
            }

            _context.DesignationDetails.Remove(designation);
            await _context.SaveChangesAsync();

            return designation;
        }

        private bool DesignationExists(int id)
        {
            return _context.DesignationDetails.Any(e => e.DesignationID == id);
        }
    }
}
