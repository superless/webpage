import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { hideS } from '../utilities';
import Tags from './Tags';


const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-top: 2rem;
`;

const Information = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
    display: inline-block;
    color: ${props => props.theme.colors.black.base};
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.primary.base};
    }
  }
`;

const Statistics = styled.div`
  color: ${props => props.theme.colors.black.lighter};
`;

const Excerpt = styled.div`
  margin-top: 1rem;
`;

const ItemTagCategory = ({ category, path, title, date, timeToRead, tags, excerpt }) => {
 
  return (
    <Wrapper>
      <Information>
        <Link to={path}>
          <h1>{title}</h1>
        </Link>
        <Statistics>
          {date} &mdash; Lectura de: {timeToRead} Min. &mdash; <span className={hideS}>Categoría: </span>
          <Link to={`/categories/${kebabCase(category)}`}>{category}</Link>
        </Statistics>
        {tags && <Tags tags={tags} />}
        <Excerpt>{excerpt}</Excerpt>
      </Information>
    </Wrapper>
  );
}

export default ItemTagCategory;

ItemTagCategory.propTypes = {
  category: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
  excerpt: PropTypes.string.isRequired,
};
