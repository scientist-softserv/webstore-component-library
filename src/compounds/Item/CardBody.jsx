import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import NextLink from '../../components/NextLink/NextLink'
import LinkedButton from '../LinkedButton/LinkedButton'

const CardBody = ({
  buttonLink,
  buttonProps,
  item,
  orientation,
  titleLink,
  withButtonLink,
  withTitleLink,
}) => {
  const { id, description, name } = item;

  return (
    <Card.Body className={withButtonLink && "d-flex flex-column"}>
        <div
          className={
            orientation === "horizontal"
              ? "d-block d-md-flex align-items-center justify-content-between"
              : ""
          }
        >
          <div className={orientation === "horizontal" ? "me-2" : ""}>
            <Card.Title >
            {(withTitleLink) && (
              <NextLink
              text={name}
              path={{ pathname: titleLink, query: { id } }}
              addClass="text-decoration-none link-hover"
            />)}
              {(!withTitleLink) && (
                name
            )}
          </Card.Title>
            {description && (
              <Card.Text className="fw-light">{description}</Card.Text>
            )}
          </div>
          {withButtonLink && (
            <div
              className={orientation === "horizontal" ? "mt-3 mt-md-0" : "mt-3"}
            >
              <LinkedButton
                addClass={`item-button-${orientation} item-link mt-auto`}
                buttonProps={buttonProps}
                path={{ pathname: buttonLink, query: { id } }}
              />
            </div>
          )}
        </div>
      </Card.Body>
  );
};

CardBody.propTypes = {
  buttonLink: PropTypes.string,
  // currently overriding the label on a button from being required in this component,
  // because it shouldn't be if we are not rendering a button
  // refer to the comment below
  buttonProps: PropTypes.shape({
    ...LinkedButton.propTypes.buttonProps,
    label: PropTypes.string,
  }),
  // TODO(alishaevn): is there a way to set conditional proptypes without adding another package?
  // buttonProps: props => props.withButtonLink
  // ? PropTypes.shape(Button.propTypes)
  // : PropTypes.shape({ ...Button.propTypes, label: PropTypes.string })
  item: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number.isRequired,
    img: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    }).isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string,
  }),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  titleLink: PropTypes.string,
  withButtonLink: PropTypes.bool,
  withTitleLink: PropTypes.bool,
};

CardBody.defaultProps = {
  buttonLink: '',
  buttonProps: LinkedButton.defaultProps,
  item: {
    description: '',
  },
  orientation: 'vertical',
  titleLink: '',
  withButtonLink: false,
  withTitleLink: false,
};

export default CardBody;
