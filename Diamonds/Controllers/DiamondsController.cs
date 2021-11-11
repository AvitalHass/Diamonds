using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Diamonds.Models;

namespace Diamonds.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiamondsController : ControllerBase
    {
        DiamondsList diamondList = new DiamondsList();

        [HttpGet]
        public List<Diamond> GetDiamondslist()
        {
            return  diamondList.GetDiamonsList();
        }

        [HttpPut]
        public void addDiamond(Diamond d)
        {
            diamondList.addDiamond(d);
        }
    }
}
