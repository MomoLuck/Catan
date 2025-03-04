namespace Catan.MainGame;

public static class TileRandomizer
{
    public static ATile[] Tiles { get; set; } = new ATile[19]{
        new Forest(), new Forest(), new Forest(), new Forest(),
        new Badlands(), new Badlands(), new Badlands(),
        new Plains(), new Plains(),new Desert(),new Plains(), new Plains(),
        new Field(), new Field(), new Field(), new Field(),
        new Mountain(), new Mountain(), new Mountain()
    };

    public static string[] Id { get; set; } = new string[18] {"2","3","3","4","4","5","5","6","6","8","8","9","9","10","10","11","11","12" }; 

    public static void ShuffleTiles()
    {
        
        Random rnd = new Random();
        int n = Tiles.Length;
        int k = rnd.Next(n--);
        while (n > 1) {
            k = 9;
            while (k == 9) {
                k = rnd.Next(n--);
            }
            if (n != 9) {
                ATile temp = Tiles[n];
                Tiles[n] = Tiles[k];
                Tiles[k] = temp;
            }
            else {
                n--;
            }
        }
    }

    public static void AddRandId() {
        Random rnd = new Random();
        int n = Id.Length;
        int k = rnd.Next(n--);
        while (n > 1) {
            k = 9;
            while (k == 9) {
                k = rnd.Next(n--);
            }
            if (n != 9) {
                string temp = Id[n];
                Id[n] = Id[k];
                Id[k] = temp;
            }
            else {
                n--;
            }
        }

        for (int i = 0; i < Id.Length; i++) {
            if (i < 9) {
                Tiles[i].Id = Id[i];
            }
            else {
                Tiles[i+1].Id = Id[i];
            }
        }
    }
    
}