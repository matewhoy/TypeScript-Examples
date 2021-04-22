export{}

enum PhotoOrientation {

  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  private id:number;
  private title:string;
  private orientation:PhotoOrientation;

  //El constructor es una excepcion el no ponerlo en private ya que no podriamos crear objetos a partir
    //De el y seria inutil nuestra clase
  constructor(id:number,title:string,orientation:PhotoOrientation){

    this.id = id;
    this.title = title;
    this.orientation = orientation;

  }

  //Para las funciones tambien pondremos el acceso publico
  public toString(){
    return `[id ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}]`;
  }

}

class Album{

  private id:number;
  private title:string;
  private pictures: Picture[];

  public constructor(id:number, title:string){

    this.id = id;
    this.title = title;
    this.pictures = [];
  }
    public addPicture(picture:Picture){
      this.pictures.push(picture);

    }

  }

  const album:Album = new Album(1, 'personal pictures');
  const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientation)
  album.addPicture(picture);

  console.log(album);

  //Al momento de que queramos acceder a estas propiedades para imprimirlas o cambiarlas
    //No podremos hacerlo ya que estas propiedas serian privadas
/*   picture.id = 100; //public
  picture.title = 'Otro titulo'; //public
  album.title = 'Personal Activities'; */
  console.log(album);