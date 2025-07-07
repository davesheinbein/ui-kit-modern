import * as React from 'react';
import { Wrapper } from '../../Wrappers';
import InfoRow from './InfoRow';
import type {
	AdminFieldConfig,
	PerformanceData,
} from '../configurations';

const PerformanceMonitor: React.FC<{
	data: PerformanceData;
	fields: AdminFieldConfig[];
}> = ({ data, fields }) => (
	<Wrapper>
		{fields.map((field) => (
			<InfoRow
				key={field.key}
				label={field.label}
				value={(data as any)[field.key] ?? 0}
				unit={field.unit}
				formatter={field.formatter}
			/>
		))}
	</Wrapper>
);

export default PerformanceMonitor;
