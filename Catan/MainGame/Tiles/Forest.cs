namespace Catan.MainGame;

public class Forest : ATile {
    public Forest() : base(ETileTypes.Forest, ERessource.Wood, """'./img/Green.png'""")
    {
        
    }
    

    public override void GiveRessource(){
        throw new NotImplementedException();
    }
}