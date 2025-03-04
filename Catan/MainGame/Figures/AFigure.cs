namespace Catan.MainGame.Figures;

public abstract class AFigure {
    public EFigures Id {get;set;}

    public AFigure(EFigures id) {
        Id = id;
    }
    public abstract AFigure Place();
}