import { useToast, Box } from 'native-base';
import React, {useState, useEffect} from 'react';
import '../App.css';

function Progress(props) {
    const toast = useToast();
    useEffect(() => {
        toast.show({
            title: props.rate,
            status: 'info',
            placement: 'bottom-right',
            duration: 2000,
            marginRight: '10px', 
            isClosable: true,
        })
    }, 3000);
}

export default Progress;
