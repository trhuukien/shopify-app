import { Box, Divider, FooterHelp, Icon, InlineStack, Link, Text } from '@shopify/polaris';
import { CheckCircleIcon } from '@shopify/polaris-icons';
import './style.scss';

export function AllCaughtUp() {
  return (
    <div className='AllCaughtUp__root'>
			<Divider borderColor='border-tertiary' />
			<div className='AllCaughtUp__text'>
				<InlineStack align='center' wrap='wrap' direction='row'>
					<Box background='bg' paddingInline='400'>
						<InlineStack gap='200'>
							<Box>
								<Icon source={CheckCircleIcon} tone='subdued' />
							</Box>
							<Text as='h2' variant='headingSm' tone='subdued' alignment='center'>All caught up</Text>
						</InlineStack>
					</Box>
				</InlineStack>
			</div>
		</div>
  );
};

export function LearnMore() {
	return (
    <FooterHelp>
      Learn more about{' '}
      <Link url="https://polaris.shopify.com/components/navigation/footer-help">
				footer help
      </Link>
			{'.'}
    </FooterHelp>
  );
}