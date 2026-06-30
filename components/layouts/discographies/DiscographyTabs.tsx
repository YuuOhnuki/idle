import { discographies } from '@/app/discography/page';
import { Tabs } from '@heroui/react';
import DiscographyCard from './DiscographyCard';

const DiscographyTabs = () => {
    return (
        <Tabs className="w-full mx-auto" variant="secondary">
            <Tabs.ListContainer>
                <Tabs.List aria-label="Options">
                    <Tabs.Tab id="full">
                        Full
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="mini">
                        Mini
                        <Tabs.Indicator />
                    </Tabs.Tab>
                    <Tabs.Tab id="single">
                        Single
                        <Tabs.Indicator />
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs.ListContainer>
            <Tabs.Panel className="pt-4 w-full" id="full">
                <DiscographyCard discographies={discographies} type="Full" />
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="mini">
                <DiscographyCard discographies={discographies} type="Mini" />
            </Tabs.Panel>
            <Tabs.Panel className="pt-4" id="single">
                <DiscographyCard discographies={discographies} type="Single" />
            </Tabs.Panel>
        </Tabs>
    );
};

export default DiscographyTabs;
