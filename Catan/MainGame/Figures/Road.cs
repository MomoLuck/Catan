namespace Catan.MainGame.Figures;

public class Road : AFigure{
    public Road() : base(EFigures.Road) {
        
    }

    public override AFigure Place() {
        return new Road();
    }
}