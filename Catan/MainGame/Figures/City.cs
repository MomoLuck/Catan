namespace Catan.MainGame.Figures;

public class City : AFigure{
    public City() : base(EFigures.City) {
        
    }
    
    public override AFigure Place() {
        Console.WriteLine("ahh");
        return new City();
    }
}