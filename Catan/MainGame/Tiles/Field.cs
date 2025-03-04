namespace Catan.MainGame;

public class Field : ATile {
    public Field() : base(ETileTypes.Field, ERessource.Wheat, """'./img/Beige.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}