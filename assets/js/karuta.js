var efuda =
		[
			["Amazon EC2" , "AWS_Simple_Icons_Amazon_EC2" , "クラウド内で規模の変更が可能なコンピュータ処理能力を提供するウェブサービス。管理者アクセスが可能な仮想マシンとして提供される"],
			["Amazon CloudSearch" , "AWS_Simple_Icons_Cloudsearch","フルマネージド型の「検索サービス」。高速で拡張性に優れた検索機能をアプリケーションに容易に統合できる"],
			["Amazon Elastic MapReduce(EMR)" , "AWS_Simple_Icons_Compute_Amazon_Elastic_MapReduce" , "EC2およびS3を利用してホストされる Hadoopクラスタフレームワークのサービス。莫大な量のデータ処理を、簡単に、費用対効果が高く、利用することができる"],
			["Amazon Dynamo DB" , "AWS_Simple_Icons_Database_Amazon_DynamoDB" ,"フルマネージド型の NoSQL データベースサービス。秒間の読み書き性能を「ユニット」という単位で指定でき、必要に応じていつでも変更することができる"],
			["Amazon RDS" , "AWS_Simple_Icons_Database_Amazon_RDS.eps" , "フルマネージド型のRDBMSサービス。必要に応じてコンピュートリソースやストレージ容量を拡張できる柔軟性や、煩わしい管理作業を軽減する自動バックアップやパッチ当て機能により、利用者はアプリケーションの開発やビジネスに集中できる。MySQL、Oracle Database、SQLServerが利用できる"],
			["Amazon Glacier" , "AWS_Simple_Icons_Amazon_Glacier" , "アクセス頻度の低いデータや、取り出しに数時間かかっても問題ないデータに合わせて最適化された、低コストのオンラインストレージサービス。API経由のアクセス以外に、Amazon S3と連携することで、Management Console からデータを管理することも可能である"],
			["Elastic IPs", "AWS_Simple_Icons_Compute_Amazon_EC2_Elastic_IP " ,"EC2に割り付けて利用する固定IPアドレス。インスタンスに割り当てていれば無料で利用できるが、未割り当てだと時間単位の利用料がかかるので注意が必要"],
			["Amazon CloudFront" , "AWS_Simple_Icons_Content_Delivery_Amazon_CloudFront" , "NASAの火星探査機Curiosityの着陸映像をライブ配信する際にも利用された、エッジロケーションのグローバルなネットワークを利用し、静的コンテンツやストリーミングコンテンツを高パフォーマンスに配信をするサービス"],
			["Amazon ElastiCache" , "AWS_Simple_Icons_Database_Amazon_ElastiCache" , "データアクセスをメモリ上にキャッシュすることでアプリケーションのパフォーマンスを向上させる memcached 準拠のキャッシュサービス"],
			["AWS CloudFormation" , "AWS_Simple_Icons_Deployment_Management_AWS_CloudFormation" , "テンプレートを利用することで、AWSのインフラやリソースを集約し、スタックとしてデプロイすることができるサービス"],
			["Amazon Elastic Load Balancer(ELB)" , "AWS_Simple_Icons_Networking_Amazon_Elastic_Load_Balancer" , "複数のAmazon EC2インスタンス間で、アプリケーショントラフィックの負荷を自動的に分散するためのサービス"],
			["Amazon VPC(Virtual Private Cloud)" , "AWS_Simple_Icons_Networking_Amazon_VPC", "AWSインフラ内に、仮想ネットワーク環境として、ユーザが制御可能な閉域網を構築できるサービス"],
			["AWS Management Console" , "AWS_Simple_Icons_Non-Service_Specific_AWS_Management_Console" , "ユーザがAWSリソースを管理するためのWebベースの管理コンソール"],
			["Amazon S3", "AWS_Simple_Icons_Storage_Amazon_S3", "いつでも、ウェブ上のどこからでも容量に関係なくデータを格納・取得できる耐久性に優れたオンライン・ストレージサービス。静的なウェブサイトのホスティングも可能"],
			["AWS Storage Gateway", "AWS_Simple_Icons_Storage_AWS_Storage_Gateway","オンプレミスのIT環境やAmazon EC2とAWSのストレージインフラをシームレスに統合する仕組み。iSCSIで接続可能な仮想ストレージを提供する"],
			["Amazon Route53" , "AWS_Simple_Icons_Networking_Amazon_Route_53" , "稼働率100%のサービスレベルアグリーメントが適用されているドメインネームシステム（DNS）サービス"],
			["AWS Direct Connect(DX)" , "AWS_Simple_Icons_Networking_AWS_Direct_Connect" , "ユーザとAWSのネットワークを専用線で接続するためのサービス"],
			["Amazon EBS(Elastic Block Store)" , "AWS_Simple_Icons_Storage_Amazon_EBS" , "EC2インスタンスで使用するためのブロックレベルのストレージボリューム。Provisioned IOPSオプションを使えば、必要なI/O性能を指定してディスクを作成できる"],
			["AWS Import/Export" , "AWS_Simple_Icons_Storage_AWS_Import_Export" , "転送用のポータブル記憶装置を用いてAWS内外へ、インターネット転送を使わずに大容量データを転送できるサービス"],
			["AWS Marketplace" , "" , "AWSクラウド上で実行されるソフトウェアのためのオンラインストア"],
			["AWS Elastic Beanstalk" , "AWS_Simple_Icons_Deployment_Management_AWS_Elastic_BeanStalk" , "gitやIDEを使い、AWSクラウド上に、アプリケーション実行環境を迅速に、簡単にデプロイするためのサービス"],
			["Elastic Network Interface(ENI)" , "" , "VPC内のEC2に複数のNICを設定できる機能"],
			["Amazon SES(Simple Email Service)" , "AWS_Simple_Icons_Messaging_Amazon_SES" , "年間10億通を送ると言われているAmazon.comが培ったEメールインフラストラクチャのノウハウを利用することができる、非常に拡張性が高くコスト効率の良い大量Eメール送信サービス"],
			["Amazon SQS(Simpe Queue Service)" , "AWS_Simple_Icons_Messaging_Amazon_SQS" , "AWSで一番最初にリリースされたサービスで、コンピュータ間でメッセージを移動する際に、それらを格納するための、信頼性の高い、拡張性のある、キューサービス"],		
			["Amazon CloudWatch" , "AWS_Simple_Icons_Monitoring_Amazon_CloudWatch" , "AWSクラウドのリソースと、AWS上で実行するアプリケーションをモニタリングできるサービス。利用料金の監視もできる"],
			["AWS IAM" ,"AWS_Simple_Icons_Deployment_Management_AWS_IAM", "AWSサービスおよびリソースへのアクセスを安全にコントロールするために、ユーザーとグループを作成および管理し、アクセス権を使用して AWSリソースへのアクセスを許可および拒否できる仕組み"],
			["AMI(Amazon Machine Image)" , "AWS_Simple_Icons_Compute_Amazon_EC2_AMI " , "OSやソフトウェアがインストールされており、実行可能な状態で保存されている仮想マシンのディスクイメージ"],
			["Amazon SNS(Siple Notification Service)" , "AWS_Simple_Icons_Messaging_Amazon_SNS" , "HTTP通知やEメール通知、SMS通知やAmazon SQSへの通知ができるサービス。アプリケーションからアプリケーション、人へのメッセージの迅速な配信環境を実現できる"],
			["Amazon SWF(Simple Workflow Service)" , "AWS_Simple_Icons_Messaging_Amazon_SWF" , "フルマネージド型の拡張性と耐障害性に優れたアプリケーションを構築するためのワークフローサービス。1つのアプリケーションを構成するさまざまな処理ステップを「タスク」として作成することにより、分散アプリケーションの作業を実行することができる"],
			["Amazon SimpleDB" ,"", "可用性と柔軟性に優れたデータストアサービス。AWS Management Consoleには表示されていない"],
			["AWS Data Pipeline","","AWSの各サービス、ならびにオンプレミスのデータソース間を、指定された間隔で、データ処理やデータ移動ができる、データドリブンなオーケストレーションサービス"],
			["Amazon Elastic Transcoder","","高度なスケーラビリティ、使いやすさ、経済性を実現するクラウドの動画変換サービス。動画ファイルをスマートフォン、タブレット、PC などのデバイスで再生可能なバージョンに変換できる"],
			["Amazon Redshift","","フルマネージド型のデータウェアハウスサービス。クラスター構成を用いて、ペタバイト級のデータセットに対して高いクエリ性能を実現する"],
			["AWS OpsWorks", "" , "Chefレシピを利用して設定が可能なDevOpsソリューションサービス。各種リソースをレイヤーという論理的なモデルで管理する"]
		];

Array.prototype.shuffle = function(){
	var length = this.length;
	var array = this;
	var ret = [];

	while(length)
	{
		var index = Math.floor(Math.random() * length--);
		ret.push(array[index]);
		array.splice(index , 1)
	}

	return ret;
}