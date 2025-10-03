import { ethers } from "ethers";
import CONTRACT_ABI from "../contracts/HealthAccessABI.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

export const createRecordOnBlockchain = async (patientId, ipfsHash) => {
  try {
    if (!window.ethereum) {
      alert("MetaMask is not installed");
      return { success: false };
    }

    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const contract = new ethers.Contract(contractAddress, CONTRACT_ABI, signer);

    const tx = await contract.createRecord(patientId, ipfsHash);
    await tx.wait();

    return { success: true, txHash: tx.hash };
  } catch (error) {
    console.error("Blockchain error:", error);
    return { success: false, error: error.message };
  }
};
