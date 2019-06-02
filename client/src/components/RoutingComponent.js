import React from 'react';
import { Link } from 'react-router-dom';

export default (props, location) => <Link to={location} {...props} />