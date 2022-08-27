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
    public class InternsController : ControllerBase
    {
        private readonly InternContext _context;

        public InternsController(InternContext context)
        {
            _context = context;
        }

        // GET: api/Interns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Intern>>> GetInternDetails()
        {
            return await _context.InternDetails.ToListAsync();
        }

        // GET: api/Interns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Intern>> GetIntern(int id)
        {
            var intern = await _context.InternDetails.FindAsync(id);

            if (intern == null)
            {
                return NotFound();
            }

            return intern;
        }

        // PUT: api/Interns/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIntern(int id, Intern intern)
        {
            if (id != intern.InternID)
            {
                return BadRequest();
            }

            _context.Entry(intern).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternExists(id))
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

        // POST: api/Interns
        [HttpPost]
        public async Task<ActionResult<Intern>> PostIntern(Intern intern)
        {
            _context.InternDetails.Add(intern);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIntern", new { id = intern.InternID }, intern);
        }

        // DELETE: api/Interns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Intern>> DeleteIntern(int id)
        {
            var intern = await _context.InternDetails.FindAsync(id);
            if (intern == null)
            {
                return NotFound();
            }

            _context.InternDetails.Remove(intern);
            await _context.SaveChangesAsync();

            return intern;
        }

        private bool InternExists(int id)
        {
            return _context.InternDetails.Any(e => e.InternID == id);
        }
    }
}
