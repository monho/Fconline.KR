'use client'
import { usePathname } from next/navigation;
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';


function SearchForm() {
  const pathname = usePathname();
  const router = useRouter();
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    // 컴포넌트가 마운트되어 있을 때에만 useRouter 사용
    if (router.isReady) {
      console.log(router);
    }
  }, [router.isReady]); // useEffect의 의존성 배열에 router.isReady 추가

  const handleSubmit = (e) => {
    e.preventDefault();

    // 동적 라우트로 이동
    router.push(`/id/${nickname}`);
  };

  return (
    <div className="FormContainer">
      <form onSubmit={handleSubmit}>
        <input
          className="SearchForm_Input"
          type="text"
          placeholder="구단주명 입력"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <button className="Search_Btn" type="submit">
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
