namespace Catan.MainGame.MainGameloop;

public static class Players {
    public static List<Player> PlayerList { get; set; }

    public static void AddPlayers(int PlayerCount, List<string> Names) {
        Names.Reverse();
        while (PlayerCount > 0) {
            PlayerList.Add(new Player(Names[PlayerCount - 1]));
        }
    }
}