using Catan.MainGame.Cards;
using Catan.MainGame.Figures;

namespace Catan.MainGame.MainGameloop;

public class Player {
    public string Name { get; set; }
    public int WinPoints { get; set; } = 0;
    public List<AFigure> Figures { get; set; } = new List<AFigure>() {
        new Settlement(),new Settlement(),new Settlement(),new Settlement(),new Settlement(),
        new City(),new City(),new City(),new City(),
        new Road(),new Road(),new Road(),new Road(),new Road(),
        new Road(),new Road(),new Road(),new Road(),new Road(),
        new Road(),new Road(),new Road(),new Road(),new Road()
    };
    public List<ACards> RessourceCards { get; set; } = new List<ACards>();
    public List<ACards> SpecialCards { get; set; } = new List<ACards>();

    public Player(string name) {
        Name = name;
    }
    
    
}