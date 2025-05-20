namespace Catan.MainGame;

public class Badlands : ATile {
    public Badlands() : base(ETileTypes.Badlands, ERessource.Clay, """'./img/Clay.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}