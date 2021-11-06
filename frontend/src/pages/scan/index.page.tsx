//import Quagga from '@ericblade/quagga2';

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