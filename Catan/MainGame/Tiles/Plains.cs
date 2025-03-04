namespace Catan.MainGame;

public class Plains : ATile {
    public Plains() : base(ETileTypes.Plains, ERessource.Sheep, """'./img/Light_green.png'""")
    {
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}