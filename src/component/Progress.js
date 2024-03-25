import { useToast } from 'native-base';
import { useState} from 'react';
import '../App.css';

function Progress(props) {
    const toast = useToast();
    // eslint-disable-next-line
    useState(() => {
        toast.show({
            title: props.rate,
            status: 'info',
            placement: 'bottom-right',
            duration: 2000,
            marginRight: '10px', 
            isClosable: true,
        })
    }, 3000)
}

export default Progress;
