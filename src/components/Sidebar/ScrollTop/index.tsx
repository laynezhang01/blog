/**
 * @file 回到顶部按钮
 */

import React, {useCallback, useMemo} from 'react';
import {useScroll} from 'ahooks';
import SideItem from '@/components/Sidebar/Item';
import VerticalAlignTop from '/assets/icons/verticalAlignTop.svg';

const ScrollTop: React.FC = () => {
    const scroll = useScroll();

    const showTop = useMemo(() => {
        if (!scroll) {
            return false;
        }
        return scroll.top > 50;
    }, [scroll]);

    const handleScrollTop = useCallback(() => {
        window.scroll(0, 0);
    }, []);

    return <SideItem visible={showTop} handleClick={handleScrollTop} icon={<VerticalAlignTop />} />;
};

export default ScrollTop;