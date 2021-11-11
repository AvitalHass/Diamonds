using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper.Configuration;
using CsvHelper.Configuration.Attributes;



namespace Diamonds.Models
{
    public class Diamond
    {
        [Name("shape")]
        public string Shape { get; set; }
        [Name("size")]
        public decimal Size { get; set; }
        [Name("color")]
        public string Color { get; set; }
        [Name("clarity")]
        public string Clarity { get; set; }
        [Name("price")]
        public decimal Price { get; set; }
        [Name("list price")]
        public decimal ListPrice { get; set; }

        public Diamond()
        {

        }
        public Diamond(string shape, decimal size, string color, string clarity, decimal price, decimal listPrice)
        {
            this.Shape = shape;
            this.Size = size;
            this.Color = color;
            this.Clarity = clarity;
            this.Price = price;
            this.ListPrice = listPrice;
        }
    }
}
