namespace Catan.MainGame;

public class Mountain : ATile {
    public Mountain() : base(ETileTypes.Mountain, ERessource.Ore, """'./img/Grey.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}