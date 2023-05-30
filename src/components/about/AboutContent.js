export default function AboutContent(props) {
    const { textSectionOrder, textSection, imageOrder, image } = props;

    return(
        <div className="container">
            <div className="row g-4 g-xl-5 align-items-center justify-content-between">
                {/* Text Content */}
                <div className="col-12 col-lg-7 col-xl-6" style={{order: textSectionOrder}} >
                    {textSection.map((value, index) => (
                        <div key={index} dangerouslySetInnerHTML={{__html: value}} />
                    ))}
                </div>

                {/* Image */}
                <div className="col-12 col-lg-5" style={{order: imageOrder}} >
                    <img className="rounded" src={`${process.env.PUBLIC_URL}/${image}`} alt="" />
                </div>
            </div>
        </div>
    )
}