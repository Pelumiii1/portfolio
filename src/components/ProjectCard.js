import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <a href={link} target={"_blank"} style={{ textDecoration: "none", color: "white" }}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title} style={{height:'100%', width:'100%'}} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </a>
    </Col>
  )
}
