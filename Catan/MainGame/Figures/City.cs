namespace Catan.MainGame.Figures;

public class City : AFigure{
    public City() : base(EFigures.City) {
        
    }
    
    public override AFigure Place() {
        return new City();
    }
}