import React from 'react';
import styles from '../analytics.module.scss';
import Wrapper from '../../Wrappers/Wrapper';

interface AnalyticsReportProps {
	data?: any[];
}

const AnalyticsReport: React.FC<AnalyticsReportProps> = ({
	data = [],
}) => null;

export default AnalyticsReport;
