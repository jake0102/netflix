import Item from './Items'
import img1 from './1.jpeg'
import img2 from './2.jpeg'
import img3 from './3.jpeg'
import img4 from './4.jpeg'
import img5 from './5.jpeg'

function Blog(){
    return (
        <div className="blog-contents mt-4">
            <div className="row blog-row">
                <Item myImg={img1} />

                <Item myImg={img2} />

                <Item myImg={img3} />

                <Item myImg={img4} />

                <Item myImg={img5} />
            </div>
        </div>
    )
}

export default Blog