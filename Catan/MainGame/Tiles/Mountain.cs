namespace Catan.MainGame;

public class Mountain : ATile {
    public Mountain() : base(ETileTypes.Mountain, ERessource.Ore, """'./img/Stone.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}