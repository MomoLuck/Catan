namespace Catan.MainGame;

public class Desert : ATile {
    public Desert() : base(ETileTypes.Desert, ERessource.None, """'./img/Solid_yellow.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}