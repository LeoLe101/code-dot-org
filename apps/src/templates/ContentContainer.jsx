import React from 'react';
import FontAwesome from './FontAwesome';
import color from "../util/color";
import styleConstants from '../styleConstants';

// ContentContainer provides a full-width container which will render whatever
// children are passed to it. The component is useful for creating clear,
// sub-sections on a page because it was built to reuse the styling and
// functionality of a heading and the option to show a link. You can find an
// example of its use on studio.code.org/home.

const pegasusContentWidth = styleConstants['content-width'];

const styles = {
  box: {
    width: pegasusContentWidth,
  },
  heading: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 24,
    fontFamily: 'Gotham 3r',
    zIndex: 2,
    color: color.charcoal,
    width: pegasusContentWidth
  },
  description: {
    paddingRight: 10,
    paddingBottom: 20,
    fontSize: 14,
    lineHeight: '22px',
    fontFamily: 'Gotham 3r',
    zIndex: 2,
    color: color.charcoal,
    width: 940
  },
  linkToViewAll: {
    color: color.teal,
    fontSize: 14,
    fontFamily: 'Gotham 4r',
    marginTop: -2,
    display: 'inline'
  },
  chevron: {
    display: 'inline',
    color: color.teal,
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  chevronRtl: {
    display: 'inline',
    color: color.teal,
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 15,
  },
  linkBox: {
    display: 'inline',
    float: 'right',
    textDecoration: 'none'
  },
  linkBoxRtl: {
    display: 'inline',
    float: 'left',
    textDecoration: 'none',
    paddingLeft: 10,
  },
  clear: {
    clear: 'both',
    height: 30
  },
  spacer: {
    width: 20,
    float: 'left',
    color: color.white
  }
};

const ContentContainer= React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.node,
      React.PropTypes.arrayOf(React.PropTypes.node)
    ]),
    heading: React.PropTypes.string.isRequired,
    linkText: React.PropTypes.string,
    link: React.PropTypes.string,
    showLink: React.PropTypes.bool,
    isRtl: React.PropTypes.bool.isRequired,
    description: React.PropTypes.string,
  },

  render() {
    const { heading, link, linkText, showLink, description, isRtl }= this.props;
    const icon = isRtl ? "chevron-left" : "chevron-right";

    return (
      <div style={styles.box}>
        <div style={styles.heading}>
          {heading}
          {showLink &&
            <a href={link} style={isRtl ? styles.linkBoxRtl : styles.linkBox}>
              {isRtl && <FontAwesome icon={icon} style={styles.chevronRtl}/>}
              <div style={styles.linkToViewAll}>
                {linkText}
              </div>
              {!isRtl && <FontAwesome icon={icon} style={styles.chevron}/>}
            </a>
          }
        </div>
        {description && (
          <div style={styles.description}>
            {description}
          </div>
        )}
        {React.Children.map(this.props.children, (child, index) => {
          return (
            <div key={index}>
              {child}
            </div>
          );
        })}
        <div style={styles.clear}/>
      </div>
    );
  }
});

export default ContentContainer;
