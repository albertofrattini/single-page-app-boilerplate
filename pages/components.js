import Container from '../components/Container'
import Card from '../components/Card'
import ListGroup from '../components/ListGroup'
import InputText from '../components/InputText'
import CheckboxText from '../components/CheckboxText'
import Timeline from '../components/Timeline'

export default function Components() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16 w-full">
                <div className="my-16">
                    <Card
                        imageUrl="https://picsum.photos/400/200"
                        imageAlt="Some Image Alt"
                        title="Noteworthy technology acquisitions 2021"
                        content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
                        linkText="Read More"
                        linkUrl="https://google.com"
                    />
                </div>
                <div className="my-16">
                    <ListGroup />
                </div>
                <div className="my-16">
                    <InputText />
                </div>
                <div className="my-16">
                    <CheckboxText />
                </div>
                <div className="my-16">
                    <Timeline />
                </div>
            </div>
        </Container>
    )
}
