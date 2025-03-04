namespace Catan.MainGame.Figures;

public class Settlement : AFigure{
    public Settlement() : base(EFigures.Settlement) {
        
    }

    public override AFigure Place() {
        return new Settlement();
    }
}