import * as React from 'react';
import { Wrapper } from '../../Wrappers';
import InfoRow from './InfoRow';
import type {
	AdminFieldConfig,
	SessionDebuggerData,
} from '../configurations';

const SessionDebugger: React.FC<{
	data: SessionDebuggerData;
	fields: AdminFieldConfig[];
}> = ({ data, fields }) => (
	<Wrapper>
		{fields.map((field) => (
			<InfoRow
				key={field.key}
				label={field.label}
				value={(data as any)[field.key] ?? ''}
				unit={field.unit}
				formatter={field.formatter}
			/>
		))}
	</Wrapper>
);

export default SessionDebugger;
