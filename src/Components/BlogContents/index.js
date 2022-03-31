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
            contentsTitle: 'How to Own Your Audience by Creating an Email List',
            contentsDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
        },
        {
            contentsImg: img2,
            contentsTitle: 'Top 10 Toolkits for Deep Learning in 2020',
            contentsDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
        },
        {
            contentsImg: img3,
            contentsTitle: 'Everything You Need to Know About Web Accessibility',
            contentsDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
        },
        {
            contentsImg: img4,
            contentsTitle: 'How to Inject Humor & Comedy Into Your Brand',
            contentsDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
        },
        {
            contentsImg: img5,
            contentsTitle: 'Women in Web Design: How To Achieve Success',
            contentsDescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
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