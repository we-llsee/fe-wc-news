export function TopicTile({topic}){

    const styleRef =    {1: 'funky-red',
                        2:'sea-blue',
                        3:'gorgeous-green',
                        4:'wavy-orange'}

    return (
            <section className={'topic-tile ' + styleRef[Math.ceil(Math.random()*4)]}>
                <p>{topic.slug}</p>
                <p>{topic.description}</p>
             </section>
    )
}