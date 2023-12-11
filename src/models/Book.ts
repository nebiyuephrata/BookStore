import { Model,Table,Column, DataType} from "sequelize-typescript";


@Table({
    tableName:Book.BOOK_TABLE_NAME
})
export class Book  extends Model {
    public static BOOK_TABLE_NAME = 'Book' as string;
    public static BOOK_ID = 'id' as string;
    public static BOOK_TITLE = 'title' as string;
    public static BOOK_AUTHOR = 'author' as string;
    public static BOOK_COVER_IMAGE = 'cover_image' as string 
    public static BOOK_PRICE = 'price'  as string
    public static BOOK_TAGS = 'tags' as string

    @Column({
        type:DataType.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field: Book.BOOK_ID
    })
    id!:number

    @Column({
        type:DataType.STRING(100),
        field: Book.BOOK_TITLE
    })
    title!:string

    @Column({
        type:DataType.STRING(100),
        field: Book.BOOK_AUTHOR
    })
    author!:string

    @Column({
        type:DataType.STRING(200),
        field:Book.BOOK_COVER_IMAGE
    })
    cover_image!: string

    @Column({
        type:DataType.FLOAT,
        field:Book.BOOK_PRICE
    })
    price!: number
    @Column({
        type:DataType.ARRAY(DataType.STRING),
        field:Book.BOOK_TAGS
    })
    tags!:string[]
}
