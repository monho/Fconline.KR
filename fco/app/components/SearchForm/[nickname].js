// pages/id/[nickname].js

import { useRouter } from 'next/router';

function UserProfile() {
  const router = useRouter();
  const { nickname } = router.query;

  // 여기서는 nickname을 사용하여 데이터를 불러오거나 표시합니다.
  // 예를 들어, nickname을 사용해 API 호출하거나 화면에 표시할 내용을 작성합니다.

  return (
    <div>
      <h1>사용자 프로필: {nickname}</h1>
      {/* 닉네임을 기반으로 데이터를 불러오거나 표시합니다. */}
    </div>
  );
}

export default UserProfile;
