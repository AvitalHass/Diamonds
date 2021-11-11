using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Globalization;
using CsvHelper;

namespace Diamonds.Models
{
    public class DiamondsList
    {
        private static List<Diamond> AllDiamonds;

        public DiamondsList()
        {

        }

        public List<Diamond> GetDiamonsList()
        {//This function isn't async because csvHelper doesn't support it
            if (AllDiamonds == null)//read the file only once
            {
                using (var streamReader = new StreamReader(@"C:\Diamonds.csv"))
                {
                    using (var csvReader = new CsvReader(streamReader, CultureInfo.InvariantCulture))
                    {
                        AllDiamonds = csvReader.GetRecords<Diamond>().ToList();
                    }
                }
            }
            return AllDiamonds;
        }

        public void addDiamond(Diamond diamond)
        {
            if (AllDiamonds==null)
            {
                AllDiamonds = GetDiamonsList();
            }
            AllDiamonds.Add(diamond);
        }
    }
}
