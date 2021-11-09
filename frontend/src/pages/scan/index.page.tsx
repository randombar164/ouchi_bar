import Quagga from '@ericblade/quagga2';
import PropTypes from 'prop-types';
import { useLayoutEffect } from 'react';
/*
Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#yourElement')
    },
    
    decoder : {
      readers : ["code_128_reader"]
    }
  }, (err) => {
    if(err){
      return
    }
    
      Quagga.start();
  });

const defaultConstraints = {
    width: 640,
    height: 480,
};

const defaultLocatorSettings = {
    patchSize: 'medium',
    halfSample: true,
};
*/
export const Scanner = ({onDetected}) => {
  useLayoutEffect(() => {
      Quagga.init({
          inputStream: {
              type: 'LiveStream',
              constraints: {
                  width: 640,
                  height: 480,
                  //facing: 'environment' // or user
              },
          },
          locator: {
              patchSize: 'medium',
              halfSample: true,
          },
          numOfWorkers: 2,
          decoder: {
              readers: [ 'code_128_reader' ],
          },
          locate: true,
      }, (err) => {
          if (err) {
              return
          }
          Quagga.start();
      });
      Quagga.onDetected(onDetected);
      return () => {
          Quagga.offDetected(onDetected);
          Quagga.stop();
      };
  });
  return (
      <div id="interactive" className="viewport" />
  )
}

Scanner.propTypes = {
  onDetected: PropTypes.func.isRequired
};

const ScanPage: React.VFC = (): JSX.Element => {
    return (
    
        
    <div>
        <div className="place-self-start w-auto h-8 bg-gray-800"></div>
        <div className="place-self-end w-auto h-8 bg-gray-800">
            <p className = "text-white">
                バーコード検索
            </p>
        </div>
        <button className="py-2 px-4 text-red-500 bg-white rounded-full border-2 border-white">＜ 登録画面に戻る</button>
    </div>
    
    )
    }
//ここに、カメラ起動中のUIも書いてOK

export default ScanPage;