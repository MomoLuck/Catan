namespace Catan.MainGame;

public class Badlands : ATile {
    public Badlands() : base(ETileTypes.Badlands, ERessource.Clay, """'./img/Solid_red.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}