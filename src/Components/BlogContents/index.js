import Item from './Items'
import img1 from './1.jpeg'
import img2 from './2.jpeg'
import img3 from './3.jpeg'
import img4 from './4.jpeg'
import img5 from './5.jpeg'

function Blog(){

    // Get by API
    // https://jsonplaceholder.typicode.com/posts
    const blogContents = [
        {
            contentsImg: img1,
            contentsTitle: 'testing 1',
            contentsDescription: 'des 1'
        },
        {
            contentsImg: img2,
            contentsTitle: 'testing 2',
            contentsDescription: 'des 2'
        },
        {
            contentsImg: img3,
            contentsTitle: 'testing 3',
            contentsDescription: 'des 3'
        },
        {
            contentsImg: img4,
            contentsTitle: 'testing 4',
            contentsDescription: 'des 4'
        },
        {
            contentsImg: img5,
            contentsTitle: 'testing 5',
            contentsDescription: 'des 5'
        },
    ]

    return (
        <div className="blog-contents mt-4">
            <div className="row blog-row">
                {blogContents.map((item, index) => (
                    <Item item={item} key={index}/>
                ))}
            </div>
        </div>
    )
}

export default Blog