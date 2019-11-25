import React, { useMemo, useCallback } from 'react';
import FontAwesome from 'react-fontawesome'

const ASSETS = {
    SHARE_ICONS: [
        { name:'facebook-square', network: 'FACEBOOK' },
        { name:'google-plus-square', network: 'GOOGLE' },
        { name:'twitter-square', network: 'TWITTER' },
        { name: 'linkedin-square', network: 'LINKEDIN' },
        { name:'tumblr-square', network: 'TUMBLR' }
    ],
    SINGLE_ICON: {name: 'share-alt'},
    LANG: { share: 'share' }
}


const renderShareIcons = onClick => ASSETS.SHARE_ICONS.map(({ name, network }, key) => <FontAwesome className='sharedIcon' { ...{ name, key, onClick: () => onClick( network ) } } />)

const Share = ({}) => {
    const onClickCallback = useCallback( (networkName) => alert(`Share in ${networkName}`), [])
    const shareIconsMemo = useMemo( () => renderShareIcons( onClickCallback ), [] )

    return (
        <div className='shareWrapper'>
            <FontAwesome name={ASSETS.SINGLE_ICON.name} className='sharedIcon' /> {ASSETS.LANG.share}
            { shareIconsMemo }
        </div>
    )
}

export default Share
